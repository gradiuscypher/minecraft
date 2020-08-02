var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596351764",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "spawn": true
        }
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "path": "day",
            "base": "",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "world": "world",
            "imgextension": "png",
            "last_rendertime": 1596351379,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ]
};
