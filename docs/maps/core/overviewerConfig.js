var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true
        },
        "cacheTag": "1596830483",
        "debug": true
    },
    "tilesets": [
        {
            "last_rendertime": 1596830280,
            "minZoom": 0,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "isOverlay": false,
            "world": "Core01",
            "defaultZoom": 1,
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "base": "",
            "imgextension": "png"
        }
    ]
};
