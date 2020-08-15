var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true
        },
        "debug": true,
        "cacheTag": "1597518084",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "base": "",
            "world": "Core01",
            "minZoom": 0,
            "path": "day",
            "isOverlay": false,
            "poititle": "Markers",
            "imgextension": "png",
            "north_direction": 0,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1597517880,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "showlocationmarker": true
        }
    ]
};
