var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "path": "day",
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
            "maxZoom": 10,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "imgextension": "png",
            "last_rendertime": 1599155880,
            "isOverlay": false,
            "base": "",
            "minZoom": 0,
            "defaultZoom": 1,
            "north_direction": 0,
            "world": "Core01",
            "showlocationmarker": true,
            "poititle": "Markers"
        }
    ],
    "map": {
        "cacheTag": "1599156085",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
