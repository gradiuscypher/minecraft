var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "cacheTag": "1597453282",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "zoom": true,
            "overlays": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "minZoom": 0,
            "zoomLevels": 10,
            "imgextension": "png",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "base": "",
            "poititle": "Markers",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597453080,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "maxZoom": 10
        }
    ]
};
