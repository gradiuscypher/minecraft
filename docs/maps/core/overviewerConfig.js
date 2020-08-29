var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "last_rendertime": 1598677080,
            "defaultZoom": 1,
            "path": "day",
            "poititle": "Markers",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "base": "",
            "maxZoom": 10,
            "zoomLevels": 10
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1598677286"
    },
    "worlds": [
        "Core01"
    ]
};
