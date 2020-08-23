var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        }
    },
    "map": {
        "controls": {
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598140886"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "path": "day",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "world": "Core01",
            "base": "",
            "zoomLevels": 10,
            "last_rendertime": 1598140680,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ]
};
