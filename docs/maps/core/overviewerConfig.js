var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        }
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597320082",
        "controls": {
            "pan": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "last_rendertime": 1597319880,
            "base": "",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "maxZoom": 10,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "path": "day",
            "imgextension": "png",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ]
};
