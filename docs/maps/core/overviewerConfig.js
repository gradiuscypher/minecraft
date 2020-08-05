var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596607282",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "world": "Core01",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "poititle": "Markers",
            "maxZoom": 10,
            "base": "",
            "last_rendertime": 1596607080,
            "north_direction": 0,
            "name": "Daytime Render",
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "path": "day"
        }
    ]
};
