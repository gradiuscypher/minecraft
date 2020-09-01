var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598961685",
        "controls": {
            "pan": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "zoom": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "north_direction": 0,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "maxZoom": 10,
            "last_rendertime": 1598961480,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "world": "Core01",
            "poititle": "Markers",
            "minZoom": 0
        }
    ]
};
