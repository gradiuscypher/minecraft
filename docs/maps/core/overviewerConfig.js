var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true
        },
        "cacheTag": "1597737683",
        "debug": true
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "path": "day",
            "maxZoom": 10,
            "poititle": "Markers",
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "last_rendertime": 1597737480,
            "minZoom": 0,
            "imgextension": "png",
            "zoomLevels": 10,
            "world": "Core01"
        }
    ]
};
